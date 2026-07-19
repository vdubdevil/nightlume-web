import java.io.*;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.*;

public class Launcher {

    private static final String RESET = "\u001B[0m";
    private static final String GREEN = "\u001B[38;2;0;255;170m";
    private static final String CMD_GREEN = "\u001B[38;2;0;255;136m";
    private static final String WHITE = "\u001B[37m";
    private static final String GRAY = "\u001B[90m";
    private static final String RED = "\u001B[31m";

    private static final String USER_VAL = "vdubdevil";
    private static final String HOSTNAME_VAL = "nightlume";
    private static final String VERSION_VAL = "Nightlume Launcher Core v1.0-stable (Build 2026.07)";

    private static final Scanner scanner = new Scanner(System.in);
    private static final Random random = new Random();

    public static void main(String[] args) {
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
        String[] lines = {
                "       .-----------------.",
                "     .#####################.",
                "    #######---         ----",
                "   ####  ..###############..     _   _ _        _     _   _",
                "   #### ####################    | \\ | |(_)    | |   | | | |",
                "   #### ####################    |  \\| |_  __ _| |__ | |_| |_   _ _ __ ___   ___",
                "   #### ####################    | . ` | |/ _` | '_ \\| __| | | | | '_ ` _ \\ / _ \\",
                "   #### ####################    | |\\  | | (_| | | | | |_| | |_| | | | | | |  __/",
                "   ####  ''##############''     |_| \\_|_|\\__, |_| |_|\\__|_|\\__,_|_| |_| |_|\\___|",
                "    #######---         ----                 __/  |",
                "     '####################'                 |___/",
                "       '-----------------'"
        };

        for (String line : lines) {
            System.out.println(GREEN + line + RESET);
        }

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

    private static void spawnInteractiveShell() {
        while (true) {
            System.out.print(CMD_GREEN + USER_VAL + "@" + HOSTNAME_VAL + ":~$ " + RESET);
            String input = scanner.nextLine().trim();

            if (input.isEmpty()) continue;

            String[] parts = input.split("\\s+");
            String command = parts[0].toLowerCase();

            switch (command) {
                case "help":
                    System.out.println("Available Launcher Utility Blocks:\n\n" +
                            "help       Show this local environment diagnostics helper\n" +
                            "status     Display dynamic environment framework status logs\n" +
                            "clear      Flush current terminal terminal sequence matrix\n" +
                            "date       Print machine tracking runtime clock configuration\n" +
                            "version    Print core metadata distribution identity properties\n" +
                            "launch     Invoke and launch the Minecraft game process\n" +
                            "exit       Terminate local session bindings safely");
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

        String os = System.getProperty("os.name").toLowerCase();
        String baseDirPath;

        if (os.contains("win")) {
            baseDirPath = System.getenv("APPDATA") + File.separator + "Nightlume";
        } else {
            baseDirPath = System.getProperty("user.home") + File.separator + ".Nightlume";
        }

        File baseDir = new File(baseDirPath).getAbsoluteFile();
        if (!baseDir.exists()) {
            baseDir.mkdirs();
        }

        System.out.println(WHITE + "Target game directory: " + GREEN + baseDir.getAbsolutePath() + RESET);

        // --- ДИРЕКТНЫЕ ССЫЛКИ ЧЕРЕЗ CLOUDFLARE PAGES (БЕЗ РЕДИРЕКТОВ ГИТХАБА) ---
        String cdnURL = "https://pub-d37d8e049a7a45afadb50436484bbe61.r2.dev/";

        File clientJarFile = new File(baseDir, "Nightlume.jar");
        File libsDir = new File(baseDir, "libraries");
        File assetsDir = new File(baseDir, "assets");

        // 1. Скачивание основного исполнительного файла клиента
        if (!clientJarFile.exists() || clientJarFile.length() == 0) {
            System.out.println(WHITE + "» Nightlume.jar not found. Downloading via Cloudflare Edge..." + RESET);
            if (!downloadFileDirect(cdnURL + "Nightlume.jar", clientJarFile)) {
                System.out.println(RED + "[FATAL] Failed to download game binary core. Execution halted." + RESET);
                return;
            }
        }

        // 2. Скачивание и распаковка библиотек (библиотеки проверяются по наличию папки)
        if (!libsDir.exists() || libsDir.list() == null || libsDir.list().length == 0) {
            System.out.println(WHITE + "» Runtime libraries missing. Syncing package..." + RESET);
            File libsZip = new File(baseDir, "libraries.zip");
            if (downloadFileDirect(cdnURL + "libraries.zip", libsZip)) {
                System.out.println(GRAY + "[SYSTEM] Deploying native libraries matrix..." + RESET);
                extractZipViaPowershell(libsZip, baseDir);
                libsZip.delete();
            } else {
                System.out.println(RED + "[FATAL] Libraries synchronization failed." + RESET);
                return;
            }
        }

        // 3. Скачивание и распаковка игровых ресурсов (ассетов)
        if (!assetsDir.exists() || assetsDir.list() == null || assetsDir.list().length == 0) {
            System.out.println(WHITE + "» Game assets missing. Fetching data clusters..." + RESET);
            File assetsZip = new File(baseDir, "assets.zip");
            if (downloadFileDirect(cdnURL + "assets.zip", assetsZip)) {
                System.out.println(GRAY + "[SYSTEM] Extracting assets filesystem..." + RESET);
                extractZipViaPowershell(assetsZip, baseDir);
                assetsZip.delete();
            } else {
                System.out.println(RED + "[FATAL] Assets deployment failed." + RESET);
                return;
            }
        }

        // Проверяем физическое наличие файла перед генерацией потока CreateProcess
        if (!clientJarFile.exists() || clientJarFile.length() == 0) {
            System.out.println(RED + "[ERROR] Internal Classpath Error: Nightlume.jar is missing or corrupted!" + RESET);
            return;
        }

        String pathSeparator = System.getProperty("path.separator");
        String clientJarPath = clientJarFile.getAbsolutePath();
        String classpathLibs = libsDir.getAbsolutePath() + File.separator + "*";

        List<String> command = new ArrayList<>();
        command.add("java");
        command.add("-Xmx2G");
        command.add("-Djava.library.path=" + libsDir.getAbsolutePath() + File.separator + "natives");
        command.add("-cp");
        command.add(clientJarPath + pathSeparator + classpathLibs);
        command.add("net.minecraft.client.main.Main");
        command.add("--username");
        command.add("Player_" + (100 + random.nextInt(900)));
        command.add("--version");
        command.add("1.16.5");
        command.add("--gameDir");
        command.add(baseDir.getAbsolutePath());
        command.add("--assetsDir");
        command.add(assetsDir.getAbsolutePath());
        command.add("--assetIndex");
        command.add("1.16");

        System.out.println(GRAY + "Spawning native JVM thread..." + RESET);
        sleep(400);

        try {
            ProcessBuilder pb = new ProcessBuilder(command);
            pb.directory(baseDir);
            pb.inheritIO();

            System.out.println(GREEN + "[SUCCESS] Spawning Minecraft sub-process..." + RESET);
            sleep(500);

            Process process = pb.start();
            System.out.println(GREEN + "[SUCCESS] Handoff complete. Monitoring game thread..." + RESET);

            int exitCode = process.waitFor();
            System.out.println(RED + "[GAME TERMINATED] Minecraft exited with code: " + exitCode + RESET);

        } catch (Exception e) {
            System.out.println(RED + "[ERROR] Failed to execute java command: " + e.getMessage() + RESET);
        }
    }

    // Чистый, скоростной загрузчик под прямые ссылки (устойчивый к разрывам соединения)
    private static boolean downloadFileDirect(String urlString, File targetFile) {
        try {
            java.net.URL url = new java.net.URL(urlString);
            java.net.HttpURLConnection conn = (java.net.HttpURLConnection) url.openConnection();
            conn.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
            conn.setConnectTimeout(10000);
            conn.setReadTimeout(10000);

            int status = conn.getResponseCode();
            if (status != 200) {
                System.out.println("\n" + RED + "[SERVER ERROR] HTTP Status: " + status + " for URL: " + urlString + RESET);
                return false;
            }

            long totalBytes = conn.getContentLengthLong();

            try (InputStream in = conn.getInputStream();
                 FileOutputStream out = new FileOutputStream(targetFile)) {

                byte[] buffer = new byte[16384]; // Увеличенный буфер для скорости скачивания
                long bytesReadTotal = 0;
                int bytesRead;

                while ((bytesRead = in.read(buffer)) != -1) {
                    out.write(buffer, 0, bytesRead);
                    bytesReadTotal += bytesRead;

                    if (totalBytes > 0) {
                        int percent = (int) ((bytesReadTotal * 100) / totalBytes);
                        System.out.print(String.format("\r" + GREEN + "[DOWNLOADING] Core Node: %d%% (%d MB / %d MB)" + RESET,
                                percent, bytesReadTotal / (1024*1024), totalBytes / (1024*1024)));
                    } else {
                        System.out.print(String.format("\r" + GREEN + "[DOWNLOADING] In Progress: %d MB..." + RESET, bytesReadTotal / (1024*1024)));
                    }
                }
                System.out.println("\n" + GREEN + "[SUCCESS] Verification and synchronization complete." + RESET);
                return true;
            }
        } catch (Exception e) {
            System.out.println("\n" + RED + "[NETWORK FAULT] Stream dropped: " + e.getMessage() + RESET);
            if (targetFile.exists()) {
                targetFile.delete(); // Удаляем битый файл при ошибке
            }
            return false;
        }
    }

    private static void extractZipViaPowershell(File zipFile, File destDir) {
        try {
            String cmd = "powershell -Command \"Expand-Archive -Path '" + zipFile.getAbsolutePath() +
                    "' -DestinationPath '" + destDir.getAbsolutePath() + "' -Force\"";
            Process p = Runtime.getRuntime().exec(cmd);
            p.waitFor();
        } catch (Exception e) {
            System.out.println(RED + "[DEPLOYMENT ERROR] Extraction failed: " + e.getMessage() + RESET);
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
        return random.nextInt((max - min) + min);
    }
}