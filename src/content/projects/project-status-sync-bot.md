---
order: 7
name: "Project Status Sync Bot"
tag: "Workflow Automation"
status: "In Production"
description: "A GitHub App and Actions workflow that keeps GitHub Projects v2 boards in sync with issue and PR status automatically, org-wide."
stack:
  ["GitHub App", "GitHub Actions", "Projects v2 GraphQL API", "gh CLI", "jq"]
highlights:
  - "Runs in production across every active Next Wave Dev and Seattle Colleges repo"
  - "Automates project board status updates that were previously done by hand"
  - "The pattern it established was later generalized into Flowarden's configurable rules engine"
links: {}
repos: []
---

An org-wide bot and Actions workflow that keeps GitHub Projects v2 status fields synced to real issue and PR state, removing a manual chore across every active team repo. Its success in production is what led directly to generalizing the idea into Flowarden.

The core of the workflow is a status-decision step that maps GitHub webhook events — issue and PR lifecycle events, review submissions — onto one of five board columns, before a separate step applies it via the Projects v2 GraphQL API:

```yaml
- name: Decide desired status
  id: decide
  env:
    EVENT_NAME: ${{ github.event_name }}
    ACTION: ${{ github.event.action }}
    IS_DRAFT: ${{ github.event.pull_request.draft }}
    PR_MERGED: ${{ github.event.pull_request.merged }}
    REVIEW_STATE: ${{ github.event.review.state }}
  run: |
    desired=""
    case "$EVENT_NAME" in
      issues)
        case "$ACTION" in
          opened)     desired="Ready" ;;
          assigned)   desired="In Progress" ;;
          unassigned) desired="Ready" ;;
          closed)     desired="Done" ;;
          reopened)   desired="Backlog" ;;
        esac
        ;;
      pull_request_target)
        case "$ACTION" in
          opened)
            if [ "$IS_DRAFT" = "true" ]; then
              desired="In Progress"
            else
              desired="In Review"
            fi
            ;;
          ready_for_review)   desired="In Review" ;;
          converted_to_draft) desired="In Progress" ;;
          closed)
            if [ "$PR_MERGED" = "true" ]; then
              desired="Done"
            else
              desired="REMOVE"
            fi
            ;;
          reopened) desired="In Progress" ;;
        esac
        ;;
      pull_request_review)
        if [ "$ACTION" = "submitted" ]; then
          case "$REVIEW_STATE" in
            changes_requested) desired="Blocked" ;;
            approved)          desired="In Review" ;;
          esac
        fi
        ;;
    esac
    echo "desired=$desired" >> $GITHUB_OUTPUT
```

A short-lived GitHub App token (not a personal access token) authenticates the org-wide GraphQL calls, so the bot works the same way across every repo without per-repo secrets.
