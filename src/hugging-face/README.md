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

### Tasks

Inference tasks are the most common _use cases_ or _domain-specific scenarios_ that you can use with a foundation or fine-tuned model. These models are typically "instruction-tuned" to perform well on these tasks. 

The table below links to the _complete_ set of models on Hugging Face Model Hub (OSS) and Azure AI Model Catalog (curated) for each task. To view only HF models in the Azure column, select that link then add filter by collection. **Count of models reflects Aug 1, 2024 data**.

| Task Description | Hugging Face | Azure |
|------------------|--------------|-------|
| **Unclassified**| | |
| `Chat completion` | ❌| |
| `Conversational` |❌ | |
| `Embeddings` |❌ | |
| **Natural Language Processing**| | |
| `Text classification` | | |
| `Token classification` | | |
| `Table Question Answering` | | |
| `Question answering` | | |
| `Zero-shot classification` | | |
| `Translation` | | |
| `Text Translation` | ❌ | |
| `Summarization` | | |
| `Text summarization` |❌ | |
| _Feature Extraction_ | | ❌ |
| `Text Generation` | [128K+](https://huggingface.co/models?pipeline_tag=text-generation) | [326](https://ai.azure.com/explore/models?selectedTask=text-generation) |
| `Text to text generation` | | |
| `Fill mask` | [12.8K+](https://huggingface.co/models?pipeline_tag=fill-mask)| [321](https://ai.azure.com/explore/models?selectedTask=fill-mask)|
| _Sentence Similarity_ | | ❌ |
| **Computer Vision**| | |
| _Depth Estimation_ | | ❌ |
| `Image Classification` | | |
| `Object Detection` | | |
| `Image Segmentation` | | |
| `Text to image` | | |
| `Image to text` | | |
| `Image to image` | | |
| _Image to video_ | | ❌ |
| **Multimodal**| | |
| **Audio**| | |
| **Tabular**| | | | | |
| **Reinforcement Learning**| | |
| **Other**| | |
| `Text to speech` | | |
| `Zero-shot image classification` | | |
| `Completions` | | |
| `Multi-Object tracking` | | |
| `Visual question answering` | | |
| `Forecasting` | | |
| `` | | ❌ |
| | | |

 are the most common use case for generative AI models. Here are some common tasks that you can explore with Hugging Face models on Azure AI:
 - **Text Generation** - Generate text from a prompt or seed text.
 - **Question Answering** - Answer questions based on a given context.
 - **Translation** - Translate text from one language to another.
 - **Summarization** - Summarize long text into a shorter version.
 - **Token Classification** - Classify tokens in a sequence (e.g., Named Entity Recognition).
 - **Zero-Shot Classification** - Classify text without any training data.
 - **Text Sentiment Analysis** - Analyze the sentiment of a given text.
 - **Text Generation with Conditional Prompts** - Generate text based on a given prompt and conditions.
 - **Text Generation with Retrieval Augmented Generation (RAG)** - Generate text with a retrieval mechanism.

### Models


## Documentation 
### Azure AI Docs

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


### Azure ML Docs


| Resource | Description | Last Updated |
|----------|-------------|--------------|
| [Model Catalog and Collections](https://learn.microsoft.com/en-us/azure/machine-learning/concept-model-catalog?view=azureml-api-2)| Model Collections, Catalog features | Jul 2024 |
| [Deploy models from HuggingFace hub to Azure Machine Learning online endpoints for real-time inference](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-deploy-models-from-huggingface?view=azureml-api-2)| Deploy HF models from catalog using Studio, SDK, CLI (managed EP)| Dec 2023|
| [Azure Machine Inference Examples: Hugging Face](https://github.com/Azure/azureml-examples/tree/main/sdk/python/foundation-models/huggingface/inference)| Question-Answering, Text Generation, Token Classification, Translation, Zero-Shot Classification| Dec 2023  |
| [Azure Machine Learning Examples: Foundation Models](https://github.com/Azure/azureml-examples/tree/main/sdk/python/foundation-models)| Notebook collections for diverse providers, tasks  | Jul 2024|
|[How to deploy Phi-3 family of small language models with Azure Machine Learning studio](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-deploy-models-phi-3?view=azureml-api-2&tabs=phi-3-mini)|Explore Phi-3 family (SLM) - Deploy as serverless API (PAYG) | Jul 2024 |
| [Code First: Dev To Prod](https://learn.microsoft.com/en-us/azure/machine-learning/prompt-flow/how-to-integrate-with-llm-app-devops?view=azureml-api-2&tabs=cli) | Integrate prompt flow with LLM-based application DevOps| Nov 2023 |
| [LLMOps with prompt flow and GitHub](https://learn.microsoft.com/en-us/azure/machine-learning/prompt-flow/how-to-end-to-end-llmops-with-prompt-flow?view=azureml-api-2) | Well-defined process and lifecycle - build, test, optimize, deploy flows| May 2024 |
| [Azure AI Model Inference API](https://learn.microsoft.com/en-us/azure/machine-learning/reference-model-inference-api?view=azureml-api-2&tabs=python)| Understand benefits, capabilities, **availability** of common API| Jul 2024 |
| [Azure Machine Learning Examples (v2)](https://github.com/Azure/azureml-examples)| Explore [tutorials](https://github.com/Azure/azureml-examples/tree/main/tutorials) and [docs](https://github.com/Azure/azureml-examples?tab=readme-ov-file#supplementary-documentation) for Python SDK usage in AIML app dev| Aug 2024|
| [Azure Machine Learning CLI v2](https://learn.microsoft.com/en-us/azure/machine-learning/concept-v2?view=azureml-api-2#azure-machine-learning-cli-v2) | Manage data, models, env, inferencing (RT, Batch), lang-agnostic | Jan 2024 |
| [Azure Machine Learning Python SDK v2](https://learn.microsoft.com/en-us/azure/machine-learning/concept-v2?view=azureml-api-2#azure-machine-learning-python-sdk-v2) | Parity with CLI v2 - Python specific API, code-first app dev. | Jan 2024 |
| | | |

### Hugging Face Docs


| Resource | Description | Last Updated |
|----------|-------------|--------------|
|[Inference: How-To Guide](https://huggingface.co/docs/huggingface_hub/main/en/guides/inference) | Introduces API, Endpoint, Python client, [OpenAI compat](https://huggingface.co/docs/huggingface_hub/main/en/guides/inference#openai-compatibility), [Supported Tasks](https://huggingface.co/docs/huggingface_hub/main/en/guides/inference#supported-tasks) | - |
|[Inference Endpoints Service](https://huggingface.co/docs/inference-endpoints/index)| Production solution to deploy **any** Transformers models from the Hub - option to use custom container image on external service (ex: ACR & [also see: ACI](https://medium.com/thedeephub/deploy-hugging-face-text-generation-inference-on-azure-container-instance-3709eb3d3187)) | - |
| [Text Generation Inference (TGI)](https://huggingface.co/docs/text-generation-inference/index) | Toolkit to deploy & serve Large Language Models for **Text Generation Tasks** - Powers Hugging Chat - [Arch](https://huggingface.co/docs/text-generation-inference/architecture) - [Models](https://huggingface.co/docs/text-generation-inference/supported_models)| - |
| [Messages API (with TGI v1.4+)](https://huggingface.co/docs/text-generation-inference/main/en/messages_api#messages-api) | Fully compatible OpenAI Chat Completion API (common API) - see [example usage](https://huggingface.co/docs/text-generation-inference/main/en/messages_api#hugging-face-inference-endpoints) with HF API Key | - |
|[Accelerated Inference API](https://huggingface.co/docs/api-inference/index) | Serverless Inference API - Detailed Parameters (Task) - with 200K+ models - free tier (for demo use with HF Token) | - |
| | | |