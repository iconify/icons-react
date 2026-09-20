import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddkpy6xif.css';
import '../../css/k/kxukhz28t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddkpy6xif"/><path class="kxukhz28t"/>`,
		"fallback": "token:xpr",
	});
}

export default Component;
