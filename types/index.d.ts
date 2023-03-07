declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface RequsetResponse {
  code: any;
  data: any;
  total: number;
  message: string;
}