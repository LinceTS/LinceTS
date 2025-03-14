import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";

export function startup(port: number): void {
  console.log(gradient.pastel(figlet.textSync('Beehive Framework 🐝')));
  // console.log(
  //   chalk.cyan(`
  //               ____            __    _
  //              / __ )___  ___  / /_  (_)   _____  ___
  //             / __  / _ \\/ _ \\/ __ \\/ / | / / _ \\/ _ \\
  //            / /_/ /  __/  __/ / / / /| |/ /  __/  __/
  //           /_____/\\___/\\___/_/ /_/_/ |___/\\___/\\___/
  //   `)
  // );

  // console.log(
  //   chalk.greenBright(`
  //               ______                                             __
  //              / ____/________ _____ ___  ___ _      ______  _____/ /__
  //             / /_  / ___/ __ \`/ __ \`__ \\/ _ \\ | /| / / __ \\/ ___/ //_/
  //            / __/ / /  / /_/ / / / / / /  __/ |/ |/ / /_/ / /  / ,<
  //           /_/   /_/   \\__,_/_/ /_/ /_/\\___/|__/|__/\\____/_/  /_/|_|
  //       `)
  // );

  console.log(
    chalk.bold.yellow(`
    Server started at port ${port}! ✅

      Detected Modules:
        ${chalk.cyan("Controller")}   - REST
        ${chalk.cyan("Service")}      - UserService, BuyService
        ${chalk.cyan("BeeRepo")}      - UserEntity
        ${chalk.cyan("Middlewarre")}  - JwtAuth
            `)
  );
}
