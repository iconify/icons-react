import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfx2djpti.css';
import '../../css/g/g7vc6yhmk.css';
import '../../css/o/oio7ycb4l.css';
import '../../css/s/srt67wy2f.css';
import '../../css/e/e-_xfdftk.css';
import '../../css/y/yqvockbyp.css';
import '../../css/i/ihicaccwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfx2djpti"/><path class="g7vc6yhmk"/><path class="oio7ycb4l"/><path class="srt67wy2f"/><path class="e-_xfdftk"/><path class="yqvockbyp"/><path class="ihicaccwh"/>`,
		"fallback": "energy-icons:wind-turbine-check-48",
	});
}

export default Component;
