interface Option {
  apiUrl: string
  apiKey?: string
  model: string
  customModel?: string;
}
declare var $option: Option

interface Log {
  info: (msg: string) => void
  error: (msg: string) => void
}
declare var $log: Log

interface TranslateQuery {
  text: string
  from: string
  to: string
  detectFrom: string
  detectTo: string
}

type TranslateCompletion = (option: { result?: TranslateResult; error?: TranslateError }) => void

interface TranslateResult {
  from: string
  to: string
  fromParagraphs?: string[]
  toParagraphs: string[]
}
interface TranslateError {
  type: 'unknow' | 'params' | 'unsupportLanguge' | 'secretKey' | 'network' | 'api'
  message: string
  addition?: any
}
type Translate = (query: TranslateQuery, completion: TranslateCompletion) => void
