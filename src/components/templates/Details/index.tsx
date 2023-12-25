import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import GenreItem from "./GenreItem/GenreItem";
import Comments from "@/components/templates/Details/Comments/Comments";
import StatisticItem from "./StatisticItem/StatisticItem";


import Link from "next/link";
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );


  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  console.log(filmRetrieve?.data.movie.id)

  

  return (
    <Style.Details>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image} 
            ></Style.Img> 
            
          </Style.Image>

          <Style.Description>
            <Style.Title>
              {filmRetrieve?.data.movie.title != null ? 
              filmRetrieve?.data.movie.title.toUpperCase() : filmRetrieve?.data.movie.title}
            </Style.Title>
            


            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.Statistic> {
               (filmRetrieve?.data.movie.rating ? (
                  filmRetrieve?.data.movie.rating >= 7 ? (
                      <StatisticItem 
                        icon="/good.png"
                        text={filmRetrieve?.data.movie.rating}
                      ></StatisticItem>
                    ) : filmRetrieve?.data.movie.rating < 4 ?(
                      <StatisticItem 
                        icon="/bad.png"
                        text={filmRetrieve?.data.movie.rating}
                      ></StatisticItem>
                    ):
                    <StatisticItem 
                      icon="/norm.png"
                      text={filmRetrieve?.data.movie.rating}
                    ></StatisticItem>
                  ) : 
                    <StatisticItem 
                      icon="/NoRating.png"
                      text={filmRetrieve?.data.movie.rating}
                    ></StatisticItem>)}
                <StatisticItem
                  icon="/clock.png"
                  text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon="/like.png"
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
            </Style.Statistic>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            
          </Style.Description>
        </Style.Data>
        {filmRetrieve?.data.movie.id != undefined && (
            <>
              <Style.Title>
                COMMENTS
              </Style.Title>
              <Comments PersonKey={filmRetrieve?.data.movie.id}/>
            </>
        )}
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
