import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/m/my44ckkmr.css';
import '../../css/g/g1pc17epq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="my44ckkmr"/><path class="g1pc17epq"/></g>`,
		"fallback": "icon-park:weixin-scan",
	});
}

export default Component;
