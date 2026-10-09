import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6sb2hngk.css';
import '../../css/n/nnm25rbzu.css';
import '../../css/d/drgos1k9n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6sb2hngk"/><path class="nnm25rbzu"/><path class="drgos1k9n"/>`,
		"fallback": "energy-icons:webcam-20",
	});
}

export default Component;
