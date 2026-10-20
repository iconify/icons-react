import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvpkry_-f.css';
import '../../css/m/m3d6pw-jx.css';

const viewBox = {"width":55.4,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvpkry_-f"/><path class="m3d6pw-jx"/>`,
		"fallback": "thesvg-color:workos-dark",
	});
}

export default Component;
