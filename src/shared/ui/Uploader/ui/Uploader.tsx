import { useRef, useState, useEffect } from "react";
import { Box } from "../../Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "../../Typography";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, SxProps, Theme, useTheme } from "@mui/material";
import Image from "next/image";

export interface UploaderProps {
  file: File | null;
  sx?: SxProps<Theme>;
  onFileSelect: (file: File | null) => void;
}

export const Uploader = ({ file, sx, onFileSelect }: UploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileName = file ? file.name : "Файл не выбран";

  const theme = useTheme();

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileSelect = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!files || files.length === 0) return;
    onFileSelect(files[0]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDelete = () => {
    onFileSelect(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
          justifyContent: "center",
          alignItems: "center",
          border: `2px dashed ${
            isDragging ? "#0d6efd" : theme.palette.primary.main
          }`,
          backgroundColor: isDragging ? "#e6f0ff" : "transparent",
          height: 300,
          cursor: "pointer",
          borderRadius: "5px",
          transition: "all 0.2s ease-in-out",
        }}
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileSelect}
        />

        {previewUrl ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Image
              src={previewUrl}
              alt={fileName}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        ) : (
          <>
            <CloudUploadIcon
              fontSize="large"
              color={isDragging ? "primary" : "inherit"}
            />
            <Typography>
              {isDragging
                ? "Перетащите файл сюда"
                : "Выберите или перетащите файл для загрузки"}
            </Typography>
          </>
        )}
      </Box>

      <Box
        sx={{
          margin: "10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: 1,
          paddingX: 2,
          borderRadius: "5px",
          backgroundColor: "#e9f0ff",
          width: "100%",
        }}
      >
        <FilePresentIcon />
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, minHeight: 40 }}
        >
          <Typography>{fileName}</Typography>
          {file && (
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};
