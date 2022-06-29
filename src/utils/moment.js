import moment from 'moment'
import 'moment/locale/th'

moment().utcOffset('+07:00')
moment.locale('th')
moment.updateLocale('th', {
  eras: [
    {
      since: '0000-01-01',
      until: +Infinity,
      offset: 543,
      name: 'Buddha',
      narrow: 'BD',
      abbr: 'BD',
    },
  ],
})

export default moment
