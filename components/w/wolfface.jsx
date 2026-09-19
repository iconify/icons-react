import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxg2urbpi.css';
import '../../css/d/d0fagzbxo.css';
import '../../css/s/s3en1kj6e.css';
import '../../css/v/v385kybwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxg2urbpi"/><path class="d0fagzbxo"/><path class="s3en1kj6e"/><path class="v385kybwd"/>`,
		"fallback": "fxemoji:wolfface",
	});
}

export default Component;
