import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7vsc55kd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7vsc55kd"/>`,
		"fallback": "icon-park:weixin-favorites",
	});
}

export default Component;
