import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}> 
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={props.medium_cover_image}
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Rating>
                <Style.RatingIcon>
                  {props.rating ? (
                    props.rating >= 7 ?(
                      <Style.Img src="/good.png" alt="webDev"></Style.Img>
                    ) : props.rating < 4 ?(
                      <Style.Img src="/bad.png" alt="webDev"></Style.Img>
                    ):
                    <Style.Img src="/norm.png" alt="webDev"></Style.Img>
                  ) : <Style.Img src="/NoRating.png" alt="webDev"></Style.Img>}
                </Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              <Style.Details>DETAILS</Style.Details>
            </Style.Card2>
          </Style.Cards>

          <Style.Name>{props.title}</Style.Name>

          <Style.Text>
            {props.year} {props.language}
          </Style.Text>
        </Style.Content>
      </Link> 
    </Style.Film>
  );
};

export default Film;
