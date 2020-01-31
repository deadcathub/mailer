import React from "react";
import Typography from '@material-ui/core/Typography';

export const About = () => {
  return (
    <div className="container pt-4">
      <Typography variant="h3" component="h2">
        О программе
      </Typography>
      <Typography variant="body1" gutterBottom>
        Не забывайте, что консультация экстрасенса онлайн может подарить ключ к пониманию
        самых сложных ситуаций. Просто выберите эксперта и нажмите кнопку «Позвонить» рядом
        с его фотографией.
      </Typography>
    </div>
  )
}


