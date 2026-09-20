import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngk_lkb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngk_lkb8u"/>`,
		"fallback": "streamline-plump:wrap-arch-remix",
	});
}

export default Component;
