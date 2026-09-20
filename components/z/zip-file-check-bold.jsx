import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-dnevyfw.css';
import '../../css/m/mw0fk06ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-dnevyfw"/><path class="mw0fk06ms"/>`,
		"fallback": "streamline-ultimate:zip-file-check-bold",
	});
}

export default Component;
