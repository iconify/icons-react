import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-u7z_u-t.css';
import '../../css/l/lgeglqbcu.css';
import '../../css/z/zy6utib6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-u7z_u-t"/><path class="lgeglqbcu"/><path class="zy6utib6y"/>`,
		"fallback": "material-icon-theme:zeabur-light",
	});
}

export default Component;
