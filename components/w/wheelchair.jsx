import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gdjtjpfed.css';
import '../../css/w/wwijzbceg.css';
import '../../css/l/l-_lu6bxo.css';
import '../../css/e/ehvwm-b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gdjtjpfed"/><path class="wwijzbceg"/><path class="l-_lu6bxo"/><path class="ehvwm-b-i"/></g>`,
		"fallback": "matita:wheelchair",
	});
}

export default Component;
