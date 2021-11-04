import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useState } from 'react';

import {
  Card,
  CardFirstContent,
  CardSecondContent,
  Container,
  RadioSelector,
} from './styles';

type CardProps = {
  title: string;
  techs: string[];
  description: string;
  link: string;
  label1: string;
  label2: string;
  label3: string;
  img1: string;
  img2: string;
  img3: string;
};

export const InverseProjectCard: React.FC<CardProps> = ({
  title,
  techs,
  description,
  link,
  label1,
  label2,
  label3,
  img1,
  img2,
  img3,
}: CardProps) => {
  const [value, setValue] = useState(label1);
  const [img, setImg] = useState(img1);
  const [bg, setBg] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    if (event.target.value === label1) {
      setImg(img1);
      setBg(1);
    } else if (event.target.value === label2) {
      setImg(img2);
      setBg(2);
    } else {
      setImg(img3);
      setBg(1);
    }
  };

  return (
    <Container>
      <Card>
        <CardFirstContent
          style={{ backgroundColor: `${bg === 1 ? '#6094aa' : '#77411D'}` }}>
          <div className="card__second-content__info">
            <img
              sizes="50vw"
              className={`project-image-${value}`}
              src={img}
              alt="Project preview"
            />
          </div>
        </CardFirstContent>
        <CardSecondContent>
          <div className="card__first-content__info">
            <h1>{title}</h1>
            <p className="card-techs">Techs: {techs}</p>
            <p className="card-description">{description}</p>
            <a target="_blank" rel="noreferrer" href={link}>
              GITHUB PROJECT
            </a>
            <RadioSelector>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="appPreview"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  row>
                  <FormControlLabel
                    disableTypography
                    value={label1}
                    control={
                      <Radio
                        sx={{
                          color: '#000',
                          '&.Mui-checked': {
                            color: '#000',
                          },
                        }}
                      />
                    }
                    label={label1}
                    sx={{
                      fontSize: '0.9vw',
                      maxWidth: '9.3vw',
                      textTransform: 'uppercase',
                    }}
                  />
                  <FormControlLabel
                    disableTypography
                    value={label2}
                    control={
                      <Radio
                        sx={{
                          color: '#000',
                          '&.Mui-checked': {
                            color: '#000',
                          },
                        }}
                      />
                    }
                    label={label2}
                    sx={{
                      fontSize: '0.9vw',
                      maxWidth: '9.3vw',
                      textTransform: 'uppercase',
                    }}
                  />
                  <FormControlLabel
                    disableTypography
                    value={label3}
                    control={
                      <Radio
                        sx={{
                          color: '#000',
                          '&.Mui-checked': {
                            color: '#000',
                          },
                        }}
                      />
                    }
                    label={label3}
                    sx={{
                      fontSize: '0.9vw',
                      maxWidth: '9.3vw',
                      textTransform: 'uppercase',
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </RadioSelector>
          </div>
        </CardSecondContent>
      </Card>
    </Container>
  );
};
