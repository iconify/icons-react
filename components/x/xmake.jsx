import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7b0d_b0i.css';
import '../../css/h/h8nlay8ur.css';
import '../../css/l/l7jcqeb3y.css';
import '../../css/q/q4ug01b1h.css';
import '../../css/g/ggghmlb3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t7b0d_b0i"/><path class="h8nlay8ur"/><path class="l7jcqeb3y"/><path class="q4ug01b1h"/><path class="ggghmlb3n"/>`,
		"fallback": "material-icon-theme:xmake",
	});
}

export default Component;
