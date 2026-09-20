import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waj_2hban.css';
import '../../css/z/z4hja-bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waj_2hban"/><path class="z4hja-bet"/>`,
		"fallback": "token:xvg",
	});
}

export default Component;
