import PropTypes from 'prop-types'
import { getStaticInfo } from '../../dataBaseQueries/staticInfo'

const StaticInfo = ({ staticInfo }) => {
  return (
    <>
      <div>Some Static info</div>
      <div>{staticInfo}</div>
    </>
  )
}

StaticInfo.propTypes = {
  staticInfo: PropTypes.string,
}

export async function getStaticProps() {
  const staticInfo = await getStaticInfo()
  return { props: { staticInfo } }
}

export default StaticInfo;