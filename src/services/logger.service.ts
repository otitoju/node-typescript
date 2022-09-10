
export class LoggerService {
  constructor() {}

  Tracer(Method: string, Msg: string, Exception: any): void {
    // return;
    console.log(
      "HANDLE EX FROM -> " + Method + ": " + Msg,
      JSON.stringify(Exception)
    );
  }

  Logger(Method: string, Msg: any) {
    //  return;
    console.log("ERROR FROM -> " + Method + " -> " + Msg);
  }
}
