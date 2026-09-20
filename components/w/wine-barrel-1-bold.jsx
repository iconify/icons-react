import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9nbipb_i.css';
import '../../css/v/vw1ziqbrv.css';
import '../../css/i/izh8f-hbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9nbipb_i"/><path class="vw1ziqbrv"/><path class="izh8f-hbs"/>`,
		"fallback": "streamline-ultimate:wine-barrel-1-bold",
	});
}

export default Component;
