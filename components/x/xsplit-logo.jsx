import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvbql63vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvbql63vo"/>`,
		"fallback": "streamline-logos:xsplit-logo",
	});
}

export default Component;
