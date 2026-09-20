import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh7ouzyov.css';
import '../../css/l/l14k1ybbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh7ouzyov"/><path clip-rule="evenodd" class="l14k1ybbg"/>`,
		"fallback": "lineicons:yarn",
	});
}

export default Component;
