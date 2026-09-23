---
order: 6
name: "Chao Companion AI"
tag: "Real-Time AI Companion"
status: "In Progress"
description: "A headless AI 'brain' for an animated streaming companion — listens to voice and chat, replies with synthesized speech, and expresses itself through emotes and motion."
stack:
  [
    "Python 3.11",
    "asyncio",
    "Claude API",
    "Ollama",
    "faster-whisper",
    "Piper TTS",
    "VTube Studio API",
  ]
highlights:
  - "Cancellable, priority-arbitrated event bus and turn orchestrator driving speech, emotes, and motion in real time"
  - "Zero-VRAM design: CPU speech-to-text/TTS with a cloud LLM, so a game can use the full GPU while streaming"
  - "Circuit-breaker LLM fallback to a local model, with 396 automated tests over ~5,700 lines of Python"
  - "Prompt-injection hardening on untrusted Twitch chat input, with a fail-closed trust boundary and a physical kill switch"
links:
  repo: "https://github.com/JesseCaddell/chao_companion_ai"
repos: ["JesseCaddell/chao_companion_ai"]
---

A real-time AI companion character rendered in VTube Studio: it listens to a streamer's voice and Twitch chat, replies with synthesized speech, and expresses itself physically through emotes and continuous procedural motion, building memory of returning viewers across sessions.
