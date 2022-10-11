import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  LinkTo,
  TrendingVideosItem,
  TrendingVideoImg,
  TrendingVideoCardContainer,
  TrendingVideoCardTitle,
  TrendingVideoCardChannel,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoCard} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard

  const getTime = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {DarkTheme} = value

        return (
          <LinkTo to={`/videos/${id}`}>
            <TrendingVideosItem>
              <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoCardContainer>
                <TrendingVideoCardTitle Dark={DarkTheme}>
                  {title}
                </TrendingVideoCardTitle>
                <TrendingVideoCardChannel>
                  {channel.name}
                </TrendingVideoCardChannel>
                <TrendingVideoCardChannel>
                  {viewCount} views . {getTime()} ago
                </TrendingVideoCardChannel>
              </TrendingVideoCardContainer>
            </TrendingVideosItem>
          </LinkTo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
