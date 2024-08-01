# Generative AI in #30Days

The #30DaysOf series of repositories were originally intended to provide a structured content-driven roadmap to learn a new topic in a month. 

In reality, we all learn at our own pace and no topic can be really mastered in just 30 days. Instead, I view my learning journey as week-long sprints, where I focus on one core concept or tool each week. A #30DaysOf roadmap can be defined from any four sprints that teach a specific topic end-to-end.

> [!NOTE]  
> Generative AI is a broad topic with many pre-existing resources. Exploring it requires a dual mindset:
> - **Build It Up** - work through pre-existing guides
> - **Tear It Down** - deconstruct open-source projects
>
> The first step teaches core concepts and building blocks from traditional tutorials and documentation sources. The second step helps you skill up on advanced topics and best practices by reverse-engineering existing real-world projects.


## Pre-Requisites

My learning journey has three elements:
- **Code in [Python3](https://www.python.org/)** - use Jupyter Notebooks for code & context.
- **Protype with [Hugging Face](https://huggingface.co)** - use open-source models & tools.
- **Productize with [Microsoft Azure](https://ai.azure.com)** - use LLMOps tools & workflows.

To work through exercises, we need:
 - A valid GitHub account (with GitHub Codespaces quota)
 - Basic familiarity with Python and Jupyter Notebooks
 - Basic familiarity with Visual Studio Code - [install it for free](https://code.visualstudio.com/)
 - A Hugging Face account and token - [create one for free](https://huggingface.co/join)
 - An Azure account and subscription - [create one for free](https://azure.microsoft.com/en-us/free/)
 - Access to Azure AI services - [check requirements here](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview#how-do-i-get-access-to-azure-openai)

## Learning Objectives

By taking this learning journey, we should be able to:
 - Explain core Generative AI concepts and tools (Platform)
 - Understand end-to-end development workflows (LLMOps)
 - Prototype open-source generative AI solutions (Hugging Face)
 - Productize the generative AI solution ( Azure AI)
 - Evaluate quality and ensure safety in solutions (Responsible AI)
 - Explore creative and innovative real-world AI uses (Applied AI)

## Development Environment

This repository contains both the code and the docs for the journey. 
- `docs/`- contains documentation in the form of a _Docusarus_ static site published to GitHub Pages with ability to preview locally.
- `src/` contains hands-on labs in the form of _Jupyter Notebooks_ that can be run in GitHub Codespaces or Docker Desktop.

The repository is setup with a `.devcontainer` that pre-defines all required dependencies for both the documentation and labs requirements. Follow instructions below to get started exploring them with either GitHub Codespaces (cloud) or Docker Desktop (local).

## Preview Docs

The `docs/` folder contains the source for a static [Docusaurus](https://docusaurus.io/) site that is published to GitHub Pages. It was created using the [default quickstart](https://docusaurus.io/docs):

```bash
npx create-docusaurus@latest docs classic
```

See [docs/README.md](docs/README.md) for details on updates to [docusaurus.config.js](https://docusaurus.io/docs/api/docusaurus-config), [sidebars.js](https://docusaurus.io/docs/sidebar/items) and other files - for site customization.


To build, preview, or deploy, the site from commandline, **first change directory to `docs/`** then use one of the following commands:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies first |
| `npm start` | Preview site with dev server |
| `npm run build` | Build static site for deploy |
| `npm run serve` | Preview site from static build |
| `npm run deploy` | Publish static build to GitHub pages |

## Run Notebooks

The `.devcontainer` folder contains a `Dockerfile` and `devcontainer.json` that can setup a prebuilt development environment with all the necessary dependencies for the labs. To get started, launch the devcontainer using one of the two options below:

| Option | Description |
|--------|-------------|
| **GitHub Codespaces** | [Launch a devcontainer in the cloud](https://docs.github.com/en/codespaces/getting-started/quickstart). Gives you a VM that can be accessed from any device, including from a VS Code instance in the browser. **Requires GitHub Codespaces quota** - personal free tier is enough.|
| **Docker Desktop** | [Launch a dev container in the local device](https://code.visualstudio.com/docs/devcontainers/tutorial). **Requires pre-installing the free Docker Desktop** - your setup may be constrained by device hardware availability but this solution does not require Codespaces quota.|
| | |

Once you have a running development container, you should have an active Python 3.x runtime with all necessary dependencies installed. To run an exercise, change directory to `src/` and follow these steps:
 - Click on the Jupyter notebook for the relevaant lab.
 - Click `Select Kernel`, pick the recommended _Python 3.x_ option.
 - Click `Run All` to execute all cells in the notebook.
 - Alternatively, run cells one-by-one for stepwise walkthrough.

## Troubleshooting

This section will collect FAQ for common issues and workarounds or fixes to resolve them. `TODO:` Add a custom issue to help readers report problems with specific tags for faster identification and resolution.