import { GA_TRACKING_ID } from '../../utils/constants'

// log the pageview with their URL
export const pageview = (url) => {
  try {
    if (window.gtag)
      window.gtag("config", GA_TRACKING_ID, {
        page_location: url,
      });
  } catch (error) {
    console.log("Error from the trackerPageView => ", error);
  }
}

// log specific events happening.
export const event = ({ action, params }) => {
  try {
    if (window.gtag)
      window.gtag('event', action, params)
  } catch (error) {
    console.log("Error from the tracker events => ", error);
  }
}