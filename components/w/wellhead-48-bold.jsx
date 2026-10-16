import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1472bbsx.css';
import '../../css/a/ao77iybri.css';
import '../../css/l/l6r9phbzx.css';
import '../../css/h/hjweu_bvz.css';
import '../../css/k/kiormob3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1472bbsx"/><path class="ao77iybri"/><path class="l6r9phbzx"/><path class="hjweu_bvz"/><path class="kiormob3f"/>`,
		"fallback": "energy-icons:wellhead-48-bold",
	});
}

export default Component;
