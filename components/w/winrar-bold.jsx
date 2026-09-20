import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imdqhbpbn.css';
import '../../css/i/i3t22pyfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="imdqhbpbn"/><path class="i3t22pyfr"/>`,
		"fallback": "solar:winrar-bold",
	});
}

export default Component;
