import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";
import ora from "ora";
import { EntitiesControll } from "../core/EntitiesControl";

// Definir un gradiente personalizado para el framework
const linceGradient = gradient(['#FFD700', '#FF8C00', '#FF4500']);

export async function startup(port: number): Promise<void> {
  // Limpiar consola
  console.clear();

  // Mostrar logo con animación
  const logo = figlet.textSync("LINCE", {
    font: "ANSI Shadow",
    horizontalLayout: "fitted"
  });
  // Definir un gradiente más rojizo para el logo
  const linceGradient = gradient(['#FF4500', '#FF0000', '#8B0000']);

  console.log(linceGradient(logo));
  console.log(chalk.dim("                                     Powered by LinceTS"));
  console.log();

  // Simular carga con spinner
  const spinner = ora({
    text: chalk.blue('Initializing framework components...'),
    color: 'yellow',
  }).start();

  await new Promise(resolve => setTimeout(resolve, 1000));
  spinner.succeed(chalk.green('Framework components initialized'));

  // Simular detección de módulos con spinners
  const detectControllers = ora({
    text: chalk.blue('Scanning controllers...'),
    color: 'yellow',
  }).start();
  await new Promise(resolve => setTimeout(resolve, 500));
  detectControllers.succeed(chalk.green(`${EntitiesControll.Routes.length} controllers detected`));

  const detectRoutes = ora({
    text: chalk.blue('Setting up routes...'),
    color: 'yellow',
  }).start();
  await new Promise(resolve => setTimeout(resolve, 700));
  detectRoutes.succeed(chalk.green(`${EntitiesControll.RoutesMethods.length} endpoints registered`));

  const startServer = ora({
    text: chalk.blue(`Starting HTTP server on port ${port}...`),
    color: 'yellow',
  }).start();
  await new Promise(resolve => setTimeout(resolve, 600));
  startServer.succeed(chalk.green(`Server running at http://localhost:${port}/`));

  // Información del servidor en un box
  const serverInfo = boxen(
    `${chalk.bold('LINCE FRAMEWORK')} ${chalk.dim('v0.1.0')}\n\n` +
    `${chalk.cyan('• Server Status')}: ${chalk.green('Online')}\n` +
    `${chalk.cyan('• Environment')}: ${chalk.yellow(process.env.NODE_ENV || 'development')}\n` +
    `${chalk.cyan('• Local URL')}: ${chalk.blue(`http://localhost:${port}`)}\n`,
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'yellow',
      title: '🚀 SERVER INFORMATION',
      titleAlignment: 'center'
    }
  );

  console.log(serverInfo);

  // Mostrar información de los módulos detectados
  const modules = boxen(
    `${chalk.magenta('• Controllers')}: ${chalk.white(EntitiesControll.Routes.map(r => r.key).join(', ') || 'None')}\n` +
    `${chalk.magenta('• Endpoints')}: ${chalk.white(EntitiesControll.RoutesMethods.length.toString())}\n` +
    `${chalk.magenta('• Params')}: ${chalk.white(EntitiesControll.MethodParam.length.toString())}\n`,
    {
      padding: 1,
      margin: { top: 0, bottom: 1, left: 1, right: 1 },
      borderStyle: 'round',
      borderColor: 'magenta',
      title: '📦 DETECTED MODULES',
      titleAlignment: 'center'
    }
  );

  console.log(modules);

  // Consejos para desarrolladores
  console.log(
    boxen(
      `${chalk.bold('Tips:')}\n` +
      `${chalk.dim('•')} Run ${chalk.cyan('GET /api-docs')} to access the API documentation\n` +
      `${chalk.dim('•')} Use ${chalk.cyan('@Route("/path")')} decorator to define new controllers\n` +
      `${chalk.dim('•')} Press ${chalk.cyan('Ctrl+C')} to stop the server`,
      {
        padding: 1,
        margin: { top: 0, left: 1, right: 1 },
        borderStyle: 'round',
        borderColor: 'blue',
        dimBorder: true
      }
    )
  );

  // Línea final con información adicional
  console.log(`\n${chalk.dim('❯ Lince is ready to roar! Happy coding!')}\n`);
}
