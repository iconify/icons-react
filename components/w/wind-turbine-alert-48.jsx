import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfx2djpti.css';
import '../../css/w/watd-znrs.css';
import '../../css/o/oio7ycb4l.css';
import '../../css/t/tj3lz7kru.css';
import '../../css/d/d41okhbyu.css';
import '../../css/i/i9vblpk9y.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfx2djpti"/><path class="watd-znrs"/><path class="oio7ycb4l"/><path class="tj3lz7kru"/><path class="d41okhbyu"/><path class="i9vblpk9y"/><path class="bxzxb8v8d"/>`,
		"fallback": "energy-icons:wind-turbine-alert-48",
	});
}

export default Component;
