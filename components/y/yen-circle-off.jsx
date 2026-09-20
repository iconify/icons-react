import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvredbs8j.css';
import '../../css/l/lnjmelzpu.css';
import '../../css/s/s-y6vgbvz.css';
import '../../css/h/h3qpe_b5d.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vvredbs8j"/><path clip-rule="evenodd" class="lnjmelzpu"/><path clip-rule="evenodd" class="s-y6vgbvz"/><path clip-rule="evenodd" class="h3qpe_b5d"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:yen-circle-off",
	});
}

export default Component;
