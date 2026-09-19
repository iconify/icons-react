import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3-fdubsi.css';
import '../../css/y/yr0-rkpxs.css';
import '../../css/p/povs420wf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU2aZu04e"><g class="ft5dv1b6b"><path class="e3-fdubsi"/><path class="yr0-rkpxs"/><circle class="povs420wf"/></g></mask></defs><path mask="url(#SVGU2aZu04e)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wind-turbine",
	});
}

export default Component;
