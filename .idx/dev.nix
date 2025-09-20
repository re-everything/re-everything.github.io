{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [
    pkgs.ruby_3_2
    pkgs.bundler
    pkgs.jekyll
    pkgs.gnumake
  ];
}
