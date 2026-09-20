import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhekvnzub.css';
import '../../css/p/p86fbnb3m.css';
import '../../css/h/h2yd55b_g.css';
import '../../css/m/md5g9bbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhekvnzub"/><path class="p86fbnb3m"/><path class="h2yd55b_g"/><path class="md5g9bbwd"/></g>`,
		"fallback": "streamline-cyber-color:window-speedtest",
	});
}

export default Component;
