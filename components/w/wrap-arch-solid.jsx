import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakwjbuay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iakwjbuay"/>`,
		"fallback": "streamline-sharp:wrap-arch-solid",
	});
}

export default Component;
