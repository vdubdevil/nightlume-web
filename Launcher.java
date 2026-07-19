import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.*;

public class Launcher {

    // Style Constants matching the Web CLI Matrix
    private static final String RESET = "\u001B[0m";
    private static final String GREEN = "\u001B[38;2;0;255;170m";
    private static final String CMD_GREEN = "\u001B[38;2;0;255;136m";
    private static final String WHITE = "\u001B[37m";
    private static final String GRAY = "\u001B[90m";
    private static final String RED = "\u001B[31m";

    private static final String USER_VAL = "vdubdevil";
    private static final String HOSTNAME_VAL = "nightlume";
    private static final String VERSION_VAL = "Nightlume Launcher Core v1.0-stable (Build 2026.07)";

    // Countdown target adjusted to avoid negative evaluation traps
    private static final LocalDateTime TARGET_RELEASE = LocalDateTime.of(2026, Month.JULY, 20, 0, 0, 0);

    private static final Scanner scanner = new Scanner(System.in);
    private static final Random random = new Random();

    public static void main(String[] args) {
        // Enforce UTF-8 to protect console output stream rendering
        try {
            System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));
        } catch (UnsupportedEncodingException ignored) {}

        clearScreen();
        printAsciiLogo();
        runCinematicBoot();
    }

    private static void clearScreen() {
        System.out.print("\u001B[H\u001B[2J");
        System.out.print(RESET);
        System.out.flush();
    }

    private static void printAsciiLogo() {
        String asciiLogo = """
       .-----------------.
     .#####################.
    #######---         ----
   ####  ..###############..  	 _   _ _        _     _   _                      
   #### #################### 	| \\ | |(_)    | |   | | | |                     
   #### #################### 	|  \\| |_  __ _| |__ | |_| |_   _ _ __ ___   ___ 
   #### ####################    	| . ` | |/ _` | '_ \\| __| | | | | '_ ` _ \\ / _ \\
   #### ####################    	| |\\  | | (_| | | | | |_| | |_| | | | | | |  __/
   ####  ''##############''     	|_| \\_|_|\\__, |_| |_|\\__|_|\\__,_|_| |_| |_|\\___|
    #######---         ----              	__/  |                                
     '####################'              	|___/                                 
       '-----------------'   """;
        System.out.println(GREEN + asciiLogo + RESET);
        System.out.print(WHITE + " » CURRENT INSTALLED VERSION: " + RESET);
        System.out.println(GREEN + "1.16.5-Nightlume" + RESET);
        System.out.println("\n");
        sleep(600);
    }

    private static void runCinematicBoot() {
        System.out.println(GREEN + "Nightlume bootstrap initialized." + RESET);
        sleep(randomDelay(150, 300));

        System.out.println(WHITE + "Establishing secure sandbox connection..." + RESET);
        sleep(randomDelay(400, 700));

        System.out.println("[" + GREEN + "  OK  " + RESET + "] Loading graphics subsystem...");
        sleep(randomDelay(80, 200));
        System.out.println("[" + GREEN + "  OK  " + RESET + "] Mounting virtual filesystem...");
        sleep(randomDelay(150, 450));
        System.out.println("[" + GREEN + "  OK  " + RESET + "] Starting authentication daemon...");
        sleep(randomDelay(60, 150));
        System.out.println("[" + GREEN + "  OK  " + RESET + "] Loading NightCore modules...");
        sleep(randomDelay(300, 600));
        System.out.println("[" + GREEN + "  OK  " + RESET + "] Verifying render engine...");
        sleep(randomDelay(90, 220));
        System.out.println("[" + GREEN + "  OK  " + RESET + "] Connecting to secure node...");
        sleep(randomDelay(100, 250));

        System.out.println();

        System.out.print(CMD_GREEN + USER_VAL + "@" + HOSTNAME_VAL + ":~$ " + RESET);
        typeText("sudo apt install nightlume-core", 40);
        System.out.println();

        System.out.println(WHITE + "Reading package lists... Done" + RESET);
        sleep(250);
        System.out.println(WHITE + "Building dependency tree... Done" + RESET);
        sleep(350);

        renderProgressBar(24);

        System.out.println(GREEN + "Unpacking nightlume-core (v1.0-stable)... Done" + RESET);
        sleep(450);
        System.out.println();

        System.out.println(GRAY + "Launching interactive shell interface orchestration layers..." + RESET);
        System.out.println();
        sleep(800);

        spawnInteractiveShell();
    }

    private static void printCountdownString() {
        LocalDateTime now = LocalDateTime.now();
        if (now.isAfter(TARGET_RELEASE)) {
            System.out.print(GREEN + "LIVE NOW" + RESET);
            return;
        }

        Duration duration = Duration.between(now, TARGET_RELEASE);
        long days = duration.toDays();
        long hours = duration.toHoursPart();
        long minutes = duration.toMinutesPart();
        long seconds = duration.toSecondsPart();

        System.out.print(GREEN + String.format("%dd %dh %dm %ds", days, hours, minutes, seconds) + RESET);
    }

    private static void spawnInteractiveShell() {
        while (true) {
            System.out.print(CMD_GREEN + USER_VAL + "@" + HOSTNAME_VAL + ":~$ " + RESET);
            String input = scanner.nextLine().trim();

            if (input.isEmpty()) continue;

            String[] parts = input.split("\\s+");
            String command = parts[0].toLowerCase();

            switch (command) {
                case "help":
                    System.out.println("""
                        Available Launcher Utility Blocks:
                        
                        help       Show this local environment diagnostics helper
                        status     Display dynamic environment framework status logs
                        clear      Flush current terminal terminal sequence matrix
                        date       Print machine tracking runtime clock configuration
                        version    Print core metadata distribution identity properties
                        launch     Invoke and launch the Minecraft game process
                        exit       Terminate local session bindings safely""");
                    break;
                case "status":
                    System.out.println("System Core Launcher Matrix: " + GREEN + "ONLINE // READY TO LAUNCH" + RESET);
                    System.out.println("Target Pipeline Status:      " + GREEN + "UNLOCKED" + RESET);
                    break;
                case "countdown":
                    System.out.println(GREEN + "Engine deployment active. Game runtime is available." + RESET);
                    break;
                case "clear":
                    clearScreen();
                    break;
                case "date":
                    System.out.println(LocalDateTime.now().toString());
                    break;
                case "version":
                    System.out.println(VERSION_VAL);
                    break;
                case "launch":
                    invokeActualLaunch();
                    break;
                case "exit":
                    System.out.println(GRAY + "Session bindings dropped. Goodbye." + RESET);
                    System.exit(0);
                    break;
                default:
                    System.out.println(RED + "bash: " + command + ": command not found. Type 'help' for tracking diagnostics." + RESET);
            }
        }
    }

    private static void invokeActualLaunch() {
        System.out.println(WHITE + "Initializing runtime environment verification..." + RESET);
        sleep(300);

        // Получаем путь к текущей папке запуска (.exe)
        File currentDirFile = new File(".");
        String absolutePath = currentDirFile.getAbsolutePath();
        if (absolutePath.endsWith(".")) {
            absolutePath = absolutePath.substring(0, absolutePath.length() - 1);
        }
        if (absolutePath.endsWith(File.separator)) {
            absolutePath = absolutePath.substring(0, absolutePath.length() - 1);
        }

        // Наш целевой путь — папка Runtime
        String runtimePath = absolutePath + File.separator + "Runtime";
        System.out.println(WHITE + "Target Runtime directory: " + GREEN + runtimePath + RESET);

        String pathSeparator = System.getProperty("path.separator");

        // Корректные абсолютные пути внутри Runtime
        String clientJarPath = runtimePath + File.separator + "Nightlume.jar"; // Твой MCP теперь тут!
        String nativePath = runtimePath + File.separator + "libraries" + File.separator + "natives";
        File libsFolder = new File(runtimePath + File.separator + "libraries");

        StringBuilder classpath = new StringBuilder();

        // 1. Добавляем в Classpath путь к JAR-файлу игры из папки Runtime
        classpath.append(clientJarPath);

        // 2. Добавляем туда же все библиотеки .jar из Runtime/libraries
        if (libsFolder.exists() && libsFolder.isDirectory()) {
            File[] files = libsFolder.listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.getName().endsWith(".jar")) {
                        classpath.append(pathSeparator).append(file.getAbsolutePath());
                    }
                }
            }
        } else {
            System.out.println(RED + "[ERROR] Libraries folder not found at: " + libsFolder.getAbsolutePath() + RESET);
        }

        List<String> command = new ArrayList<>();
        command.add("java");
        command.add("-Xmx2G");
        command.add("-Djava.library.path=" + nativePath);
        command.add("-cp");
        command.add(classpath.toString());
        command.add("net.minecraft.client.main.Main");
        command.add("--username");
        command.add("Player_" + (100 + random.nextInt(900)));
        command.add("--version");
        command.add("1.16.5");
        command.add("--gameDir");
        command.add(runtimePath); // Указываем майнкрафту работать внутри папки Runtime
        command.add("--assetsDir");
        command.add(runtimePath + File.separator + "assets");
        command.add("--assetIndex");
        command.add("1.16");

        System.out.println(GRAY + "Spawning native JVM thread..." + RESET);
        sleep(400);

        try {
            ProcessBuilder pb = new ProcessBuilder(command);
            pb.directory(new File(runtimePath)); // Запускаем процесс прямо в контексте папки Runtime

            pb.redirectErrorStream(true);
            pb.inheritIO();

            System.out.println(GREEN + "[SUCCESS] Minecraft processes invoked. Handoff complete." + RESET);
            sleep(500);

            Process process = pb.start();
            int exitCode = process.waitFor();

            if (exitCode != 0) {
                System.out.println(RED + "\n[CRASH] Minecraft process exited with code: " + exitCode + RESET);
                System.out.println(WHITE + "Press Enter to exit..." + RESET);
                scanner.nextLine();
            }

            System.exit(0);

        } catch (Exception e) {
            System.out.println(RED + "[ERROR] Process failed: " + e.getMessage() + RESET);
            scanner.nextLine();
        }
    }
    private static void typeText(String text, int delay) {
        for (char ch : text.toCharArray()) {
            System.out.print(ch);
            System.out.flush();
            sleep(delay);
        }
    }

    private static void renderProgressBar(int width) {
        System.out.print(WHITE + "Checking system structure integrity... \n" + RESET);

        int percent = 0;
        while (percent <= 100) {
            int progress = (width * percent) / 100;
            String bar = "█".repeat(progress) + ".".repeat(width - progress);

            System.out.print(String.format("\r" + GREEN + "[%s] %3d%% Verified" + RESET, bar, percent));
            System.out.flush();

            if (percent == 100) {
                break;
            }

            sleep(randomDelay(10, 40));
            percent += random.nextInt(4) + 1;
            if (percent > 100) {
                percent = 100;
            }
        }
        System.out.println("\n");
    }

    private static void sleep(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException ignored) {}
    }

    private static int randomDelay(int min, int max) {
        return random.nextInt((max - min) + 1) + min;
    }
}