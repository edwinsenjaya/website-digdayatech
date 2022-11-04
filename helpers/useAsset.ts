export default function useAsset(fileName: string): any {
  const assets = import.meta.glob(["~/assets/*.png", "~/assets/*.ico"], {
    eager: true,
    import: "default",
  });

  return assets["/assets/" + fileName];
}
