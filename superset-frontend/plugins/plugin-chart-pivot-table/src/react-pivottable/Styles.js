/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { css, styled } from '@superset-ui/core';

export const Styles = styled.div`
  ${({ theme, isDashboardEditMode }) => css`
    table.pvtTable {
      position: ${isDashboardEditMode ? 'inherit' : 'relative'};
      width: calc(100% - ${theme.sizeUnit}px);
      font-size: ${theme.fontSizeSM}px;
      text-align: left;
      margin: ${theme.sizeUnit}px;
      border-collapse: separate;
      font-family: ${theme.fontFamily};
      line-height: 1.4;
    }

    table thead {
      background-color: ${theme.colorBgBase};
      position: ${isDashboardEditMode ? 'inherit' : 'sticky'};
      top: 0;
    }

    table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    table.pvtTable thead tr th,
    table.pvtTable tbody tr th {
      border-top: 1px solid ${theme.colorSplit};
      border-left: 1px solid ${theme.colorSplit};
      font-size: ${theme.fontSizeSM}px;
      padding: ${theme.sizeUnit}px;
      font-weight: ${theme.fontWeightNormal};
    }

    table.pvtTable tbody tr.pvtRowTotals {
      position: ${isDashboardEditMode ? 'inherit' : 'sticky'};
      bottom: 0;
    }

    table.pvtTable thead tr:last-of-type th,
    table.pvtTable thead tr:first-of-type th.pvtTotalLabel,
    table.pvtTable thead tr:nth-last-of-type(2) th.pvtColLabel,
    table.pvtTable thead th.pvtSubtotalLabel,
    table.pvtTable tbody tr:last-of-type th,
    table.pvtTable tbody tr:last-of-type td {
      border-bottom: 1px solid ${theme.colors.grayscale.light2};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      ~ th.pvtColLabel,
    table.pvtTable tbody tr:first-of-type th,
    table.pvtTable tbody tr:first-of-type td {
      border-top: none;
    }

    table.pvtTable tbody tr td:last-of-type,
    table.pvtTable thead tr th:last-of-type:not(.pvtSubtotalLabel) {
      border-right: 1px solid ${theme.colors.grayscale.light2};
    }

    table.pvtTable
      thead
      tr:last-of-type:not(:only-child)
      th.pvtAxisLabel
      + .pvtTotalLabel {
      border-right: none;
    }

    table.pvtTable tr th.active {
      background-color: ${theme.colorPrimaryBg};
    }

    table.pvtTable .pvtTotalLabel {
      text-align: right;
      font-weight: ${theme.fontWeightStrong};
    }

    table.pvtTable .pvtSubtotalLabel {
      font-weight: ${theme.fontWeightStrong};
    }

    table.pvtTable tbody tr td {
      color: ${theme.colorPrimaryText};
      padding: ${theme.sizeUnit}px;
      background-color: ${theme.colors.grayscale.light5};
      border-top: 1px solid ${theme.colors.grayscale.light2};
      border-left: 1px solid ${theme.colors.grayscale.light2};
      vertical-align: top;
      text-align: right;
    }

    table.pvtTable tbody tr th.pvtRowLabel {
      vertical-align: baseline;
    }

    .pvtTotal,
    .pvtGrandTotal {
      font-weight: ${theme.fontWeightStrong};
    }

    table.pvtTable tbody tr td.pvtRowTotal {
      vertical-align: middle;
    }

    .toggle-wrapper {
      white-space: nowrap;
    }

    .toggle-wrapper > .toggle-val {
      white-space: normal;
    }

    .toggle {
      padding-right: ${theme.sizeUnit}px;
      cursor: pointer;
    }

    .hoverable:hover {
      background-color: ${theme.colorPrimaryBgHover};
      cursor: pointer;
    }
  `}
`;
