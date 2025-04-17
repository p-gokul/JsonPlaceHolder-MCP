interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Albums extends Array<Album> {}

interface AlbumPhoto {
  albumId: number;
  id: number;
  title: string;
  url?: string;
  thumbnailUrl?: string;
}

interface AlbumPhotos extends Array<AlbumPhoto> {}

export { Album, Albums, AlbumPhoto, AlbumPhotos };
