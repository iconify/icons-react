import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/d/dz--kkbng.css';
import '../../css/n/ndsoh9bgy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="dz--kkbng"/><path class="ndsoh9bgy"/>`,
		"fallback": "tabler-flags:yemen",
	});
}

export default Component;
