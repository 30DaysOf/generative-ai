# Hugging Face Models On Azure

This section contains notebooks and exercises to explore deploying, using, and managing, models from the Hugging Face Collection on Azure AI.

## Hugging Face Collection

The Azure AI platform has a rich [model catalog](https://ai.azure.com/explore/models) (curated by Azure AI) that you can explore in guest mode to get a sense for the possibilities. Use these filters to discover and prioritize **model selection** for your specific needs:
 - **Collection** - grouped by model provider (e.g., Hugging Face, Meta) 
 - **Deployment** - managed compute (billing) vs. serverless API (PAYG)
 - **Inference Tasks** - instruction-tuned for domain-specific tasks
 - **Fine-tuning Tasks** - models that **can** be fine-tuned on your data
 - **Licenses** - for model usage (typically set by model provider)

In _this_ project, I plan to explore three key collections:
 - [Hugging Face](https://ai.azure.com/explore/models?selectedCollection=huggingface) for open-source models.
 - [Microsoft](https://ai.azure.com/explore/models?selectedCollection=phi) for Microsoft Research models like Phi-3.
 - [Azure OpenAI](https://ai.azure.com/explore/models?selectedCollection=aoai) for OpenAI models hosted on Azure AI.

The sections below curate relevant docs from 3 key sources:
 1. [Hugging Face Docs](hhttps://huggingface.co/docs) maintained by the Hugging Face team
 1. [Azure AI Docs](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-catalog-overview) related to the Azure AI Studio Platform and SDKs.
 1. [Azure ML Docs](https://learn.microsoft.com/azure/machine-learning/concept-model-catalog?view=azureml-api-2) related to the Model Catalog, Tools and SDKs.

In each case, the goal is to capture both documentation (concepts, tutorials) and code (samples, notebooks) that we can use to skill up on generative AI application development with these model or platform providers.

## Azure AI Docs

| Resource | Description | Last Updated |
|----------|-------------|--------------|
| [Model Catalog and Collections in Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-catalog-overview)| Understand the Model Catalog, Model Collections, and Model Deployment Options on Azure AI. | Jul 2024|
|[Model benchmarks](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-benchmarks) | Compare benchmarks across models & datasets, assess if one meets your business scenario.| May 2024|
| [Deploy models, flows, and web apps with Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/deployments-overview)| Understand deployment processes, safety planning & performance optimization. | Jul 2024 |
| [How to deploy large language models with Azure AI Studio](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/deploy-models-open)| Deploy to Serverless API or Managed Compute _with code_, Try Inference, Delete | May 2024 |
| [RAG and Indexes](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/retrieval-augmented-generation) | **Data** for your generative AI app| Jun 2024 |
|[Azure AI Services](https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services?context=%2Fazure%2Fai-studio%2Fcontext%2Fcontext) | Prebuilt turnkey APIs, Models | Aug 2024 |
| [Overview of Azure AI SDKs](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/develop/sdk-overview) | **Develop** generative AI apps | May 2024 |
|[Evaluation of generative AI applications](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/evaluation-approach-gen-ai) | **Evaluate** generative AI apps | May 2024 |
| [Enable tracing and collect feedback for a flow deployment](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/develop/trace-production-sdk)| **Collect** metrics, gain insights| May 2024|
| [Monitor quality and token usage of deployed prompt flow applications](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/monitor-quality-safety?tabs=azure-studio) | **Monitor** quality, cost & perf. | May 2024 |
| | | |


## Azure ML Docs


| Resource | Description | Last Updated |
|----------|-------------|--------------|
| | | |
| | | |
| | | |
| | | |

## Hugging Face Docs


| Resource | Description | Last Updated |
|----------|-------------|--------------|
| | | |
| | | |
| | | |
| | | |