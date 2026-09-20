import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfe2xo-6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfe2xo-6j"/>`,
		"fallback": "streamline-plump:wrap-arch-solid",
	});
}

export default Component;
