import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp5ltcqbw.css';
import '../../css/w/wsnuap-ub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG42U0UdPS" viewBox="0 0 342 234"><path class="bp5ltcqbw"/></symbol></defs><use width="342" height="234" href="#SVG42U0UdPS" transform="translate(85 139)"/><path class="wsnuap-ub"/>`,
		"fallback": "meteocons:wind-beaufort-0",
	});
}

export default Component;
