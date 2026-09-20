import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7d8-7bnk.css';
import '../../css/l/ljv8sbwcz.css';
import '../../css/t/tf4su8b2i.css';
import '../../css/s/spp8njbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7d8-7bnk"/><path class="ljv8sbwcz"/><path class="tf4su8b2i"/><path class="spp8njbrp"/>`,
		"fallback": "streamline-freehand:website-development-browser-page-layout",
	});
}

export default Component;
