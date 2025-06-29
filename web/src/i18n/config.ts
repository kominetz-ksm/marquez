// Copyright 2018-2023 contributors to the Marquez project
// SPDX-License-Identifier: Apache-2.0

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const i18next = require('i18next')
export const defaultNS = 'translation'

const DETECTION_OPTIONS = {
  order: ['localStorage'],
  lookupLocalStorage: 'lng',
  caches: ['localStorage'],
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          header: {
            docs_link: 'API Docs',
          },
          jobs: {
            search: 'Search',
            latest_tab: 'LATEST RUN',
            history_tab: 'RUN HISTORY',
            location: 'LOCATION',
            empty_title: 'No Run Information Available',
            empty_body: 'Try adding some runs for this job.',
            runinfo_subhead: 'FACETS',
            facets_subhead_aria: 'Search',
            runs_subhead: 'FACETS',
            dialog_delete: 'DELETE',
            dialog_confirmation_title: 'Are you sure?',
          },
          search: {
            filter: {
              all: 'All',
              jobs: 'Jobs',
              datasets: 'Datasets',
              updated: 'Updated',
              name: 'Name',
            },
            status: 'Searching...',
            none: 'No Results',
            search: 'Search',
            search_aria: 'Search jobs and datasets',
            jobs: 'Jobs',
            and: 'and',
            datasets: 'Datasets',
          },
          lineage: {
            empty_title: 'No node selected',
            empty_body: 'Try selecting a node through search or the jobs or datasets page.',
            graph_depth_title: 'Depth',
            full_graph_label: 'Full',
            empty: 'Empty',
            no_inputs: 'No inputs for this node.',
            no_outputs: 'No outputs for this node.',
          },
          sidenav: {
            dataOps: 'DATAOPS',
            jobs: 'JOBS',
            datasets: 'DATASETS',
            events: 'EVENTS',
          },
          namespace_select: {
            prompt: 'ns',
          },
          dataset_tags: {
            tags: 'TAGS',
            tooltip: 'Add a Tag',
            dialogtitle: 'Add Tags',
            selecttagtoadd: 'Select Tag to add...',
            addatagdialog: 'Add Tag',
            canceltagdialog: 'Cancel',
          },
          dataset_info: {
            empty_title: 'No Fields',
            empty_body: 'Try adding dataset fields.',
            facets_subhead: 'FACETS',
            facets_subhead_aria: 'Search',
            run_subhead: 'Created by Run',
            duration: 'Duration',
          },
          datasets: {
            latest_tab: 'LATEST SCHEMA',
            history_tab: 'VERSION HISTORY',
            column_lineage_tab: 'COLUMN LINEAGE',
            dialog_delete: 'DELETE',
            dialog_confirmation_title: 'Are you sure?',
            show_field_tags: 'Show Field Tags',
          },
          datasets_route: {
            empty_title: 'No datasets found',
            empty_body: 'Try changing namespaces or consulting our documentation to add datasets.',
            heading: 'DATASETS',
            name_col: 'NAME',
            namespace_col: 'NAMESPACE',
            source_col: 'SOURCE',
            updated_col: 'UPDATED AT',
            quality: 'QUALITY',
          },
          datasets_column_lineage: {
            empty_title: 'No column lineage',
            empty_body: 'Column lineage not available for the specified dataset.',
          },
          jobs_route: {
            empty_title: 'No jobs found',
            empty_body: 'Try changing namespaces or consulting our documentation to add jobs.',
            heading: 'JOBS',
            name_col: 'NAME',
            namespace_col: 'NAMESPACE',
            updated_col: 'UPDATED AT',
            latest_run_col: 'LATEST RUN DURATION',
            latest_run_state_col: 'LATEST RUN STATE',
          },
          runs_columns: {
            id: 'ID',
            state: 'STATE',
            created_at: 'CREATED AT',
            started_at: 'STARTED AT',
            ended_at: 'ENDED AT',
            duration: 'DURATION',
          },
          dataset_info_columns: {
            name: 'NAME',
            type: 'TYPE',
            description: 'DESCRIPTION',
            column_lineage: 'Column Lineage',
          },
          dataset_versions_columns: {
            version: 'VERSION',
            created_at: 'CREATED AT',
            fields: 'FIELDS',
            created_by_run: 'CREATED BY RUN',
            lifecycle_state: 'LIFECYCLE STATE',
          },
          events_route: {
            title: 'EVENTS',
            from_date: 'From date',
            to_date: 'To date',
            previous_page: 'Previous page',
            next_page: 'Next page',
            empty_title: 'No events found',
            empty_body: 'Try changing dates or consulting our documentation to add events.',
          },
          events_columns: {
            id: 'RUN_ID',
            state: 'STATE',
            name: 'NAME',
            namespace: 'NAMESPACE',
            time: 'TIME',
          },
        },
      },
      fr: {
        translation: {
          header: {
            docs_link: 'Documents API',
          },
          jobs: {
            search: 'Recherche',
            latest_tab: 'DERNIÈRE COURSE',
            history_tab: "HISTORIQUE D'EXECUTION",
            location: 'EMPLACEMENT',
            empty_title: 'Pas de Course les Informations Disponibles',
            empty_body: "Essayez d'ajouter quelques exécutions pour ce travail.",
            runinfo_subhead: 'FACETTES',
            runs_subhead: 'FACETTES',
            facets_subhead_aria: 'Recherche',
            dialog_delete: 'EFFACER',
            dialog_confirmation_title: 'Êtes-vous sûr?',
          },
          search: {
            filter: {
              all: 'Tout',
              jobs: "d'Emplois",
              datasets: 'Jeux de Données',
              updated: 'Mis à jour',
              name: 'Nom',
            },
            status: 'Recherche...',
            none: 'Aucun Résultat',
            search: 'Recherche',
            search_aria: 'Recherchez des emplois et des ensembles de données',
            jobs: "d'Emplois",
            and: 'et',
            datasets: 'Jeux de Données',
          },
          lineage: {
            empty_title: 'Aucun nœud sélectionné',
            empty_body:
              'Essayez de sélectionner un nœud via la recherche ou la page des travaux ou des jeux de données.',
          },
          sidenav: {
            jobs: 'EMPLOIS',
            datasets: 'JEUX DE DONNÉES',
            events: 'ÉVÉNEMENTS',
          },
          namespace_select: {
            prompt: 'en',
          },
          dataset_tags: {
            tooltip: 'Ajouter une balise',
            dialogtitle: 'Ajouter des balises',
            selecttagtoadd: 'Sélectionnez la balise à ajouter',
            addatagdialog: 'Ajouter une étiquette',
            canceltagdialog: 'Annuler',
          },
          dataset_info: {
            empty_title: 'Aucun jeu de données trouvé',
            empty_body: "Essayez d'ajouter des champs de jeu de données.",
            facets_subhead: 'FACETTES',
            facets_subhead_aria: 'Recherche',
            run_subhead: 'Créé par Run',
            duration: 'Durée',
          },
          datasets: {
            latest_tab: 'DERNIER SCHEMA',
            history_tab: 'HISTORIQUE DES VERSIONS',
            column_lineage_tab: 'LIGNÉE DE COLONNE',
            dialog_delete: 'EFFACER',
            dialog_confirmation_title: 'Êtes-vous sûr?',
          },
          datasets_route: {
            empty_title: 'Aucun jeu de données trouvé',
            empty_body:
              'Essayez de modifier les espaces de noms ou consultez notre documentation pour ajouter des ensembles de données.',
            heading: 'JEUX DE DONNÉES',
            name_col: 'NOM',
            namespace_col: 'ESPACE DE NOMS',
            source_col: 'SOURCE',
            updated_col: 'MISE À JOUR À',
            status_col: 'STATUT',
          },
          datasets_column_lineage: {
            empty_title: 'Aucune lignée de colonne',
            empty_body: "Lignage de colonne non disponible pour l'ensemble de données spécifié.",
          },
          jobs_route: {
            empty_title: 'Aucun emploi trouvé',
            empty_body:
              'Essayez de modifier les espaces de noms ou consultez notre documentation pour ajouter des travaux.',
            heading: 'EMPLOIS',
            name_col: 'NOM',
            namespace_col: 'ESPACE DE NOMS',
            updated_col: 'MISE À JOUR À',
            latest_run_col: "DERNIÈRE DURÉE D'EXÉCUTION",
            latest_run_state_col: "DERNIER ÉTAT D'EXÉCUTIONE",
          },
          runs_columns: {
            id: 'ID',
            state: 'ETAT',
            created_at: 'CRÉÉ À',
            started_at: 'COMMENCÉ À',
            ended_at: 'TERMINÉ À',
            duration: 'DURÉE',
          },
          dataset_info_columns: {
            name: 'NOM',
            type: 'TAPER',
            description: 'DESCRIPTION',
          },
          dataset_versions_columns: {
            version: 'VERSION',
            created_at: 'CRÉÉ À',
            fields: 'DOMAINES',
            created_by_run: 'CRÉÉ PAR RUN',
            lifecycle_state: 'ÉTAT DU CYCLE DE VIE',
          },
          events_route: {
            title: 'ÉVÉNEMENTS',
            from_date: 'Partir de la date',
            to_date: 'À la date',
            previous_page: 'Page précédente',
            next_page: 'Page suivante',
            empty_title: 'Aucun événement trouvé',
            empty_body:
              'Essayez de changer les dates ou consultez notre documentation pour ajouter des événements.',
          },
          events_columns: {
            id: 'ID',
            state: 'ETAT',
            name: 'NOM',
            namespace: 'ESPACE DE NOMS',
            time: 'TEMPS',
          },
        },
      },
      es: {
        translation: {
          header: {
            docs_link: 'Documentos API',
          },
          jobs: {
            search: 'Buscar',
            latest_tab: 'ÚLTIMA EJECUCIÓN',
            history_tab: 'HISTORIAL DE EJECUCIONES',
            location: 'UBICACIÓN',
            empty_title: 'No hay Información de Ejecución Disponible',
            empty_body: 'Intente agregar algunas ejecuciones para este trabajo.',
            runinfo_subhead: 'FACETAS',
            runs_subhead: 'FACETAS',
            facets_subhead_aria: 'Buscar',
            dialog_delete: 'ELIMINAR',
            dialog_confirmation_title: 'Estás seguro?',
          },
          search: {
            filter: {
              all: 'Todo',
              jobs: 'Trabajos',
              datasets: 'Conjuntos de Datos',
              updated: 'Actualizado',
              name: 'Nombre',
            },
            status: 'Buscando...',
            none: 'No Hay Resultados',
            search: 'Buscar',
            search_aria: 'Buscar trabajos y conjuntos de datos',
            jobs: 'Trabajos',
            and: 'y',
            datasets: 'Conjuntos de Datos',
          },
          lineage: {
            empty_title: 'Ningún nodo seleccionado',
            empty_body:
              'Intente seleccionar un nodo mediante la búsqueda o la página de trabajos o conjuntos de datos.',
          },
          sidenav: {
            jobs: 'TRABAJOS',
            datasets: 'CONJUNTOS DE DATOS',
            events: 'EVENTOS',
          },
          namespace_select: {
            prompt: 'en',
          },
          dataset_tags: {
            tooltip: 'Añadir una etiqueta',
            dialogtitle: 'Agregar etiquetas',
            selecttagtoadd: 'Seleccione Etiqueta para agregar',
            addatagdialog: 'Añadir etiqueta',
            canceltagdialog: 'Cancelar',
          },
          dataset_info: {
            empty_title: 'No se encontraron conjuntos de datos',
            empty_body: 'Intente agregar campos de conjuntos de datos.',
            facets_subhead: 'FACETAS',
            facets_subhead_aria: 'Buscar',
            run_subhead: 'Creado por Ejecutar',
            duration: 'Duración',
          },
          datasets: {
            latest_tab: 'ESQUEMA ÚLTIMO',
            history_tab: 'HISTORIAL DE VERSIONES',
            column_lineage_tab: 'LINAJE DE COLUMNA',
            dialog_delete: 'ELIMINAR',
            dialog_confirmation_title: 'Estás seguro?',
          },
          datasets_route: {
            empty_title: 'No se encontraron conjuntos de datos',
            empty_body:
              'Intente cambiar los espacios de nombres o consultar nuestra documentación para agregar conjuntos de datos.',
            heading: 'CONJUNTOS DE DATOS',
            name_col: 'NOMBRE',
            namespace_col: 'ESPACIO DE NOMBRES',
            source_col: 'FUENTE',
            updated_col: 'ACTUALIZADO EN',
            status_col: 'ESTADO',
          },
          datasets_column_lineage: {
            empty_title: 'Sin linaje de columna',
            empty_body: 'Linaje de columna no disponible para el conjunto de datos especificado.',
          },
          jobs_route: {
            empty_title: 'No se encontraron trabajos',
            empty_body:
              'Intente cambiar los espacios de nombres o consultar nuestra documentación para agregar trabajos.',
            heading: 'TRABAJOS',
            name_col: 'NOMBRE',
            namespace_col: 'ESPACIO DE NOMBRES',
            updated_col: 'ACTUALIZADO EN',
            latest_run_col: 'DURACIÓN DE LA ÚLTIMA EJECUCIÓN',
            latest_run_state_col: 'ESTADO DE LA ÚLTIMA EJECUCIÓN',
          },
          runs_columns: {
            id: 'ID',
            state: 'ESTADO',
            created_at: 'CREADO EN',
            started_at: 'EMPEZÓ A LAS',
            ended_at: 'TERMINÓ EN',
            duration: 'DURACIÓN',
          },
          dataset_info_columns: {
            name: 'NOMBRE',
            type: 'ESCRIBE',
            description: 'DESCRIPCIÓN',
          },
          dataset_versions_columns: {
            version: 'VERSIÓN',
            created_at: 'CREADO EN',
            fields: 'CAMPOS',
            created_by_run: 'CREADO POR EJECUTAR',
            lifecycle_state: 'ESTADO DEL CICLO DE VIDA',
          },
          events_route: {
            title: 'EVENTOS',
            from_date: 'Partir de la fecha',
            to_date: 'Hasta la fecha',
            previous_page: 'Pagina anterior',
            next_page: 'Siguiente página',
            empty_title: 'No se encontraron eventos',
            empty_body:
              'Prueba a cambiar las fechas o consulta nuestra documentación para añadir eventos.',
          },
          events_columns: {
            id: 'ID',
            state: 'ESTADO',
            name: 'NOMBRE',
            namespace: 'ESPACIO DE NOMBRES',
            time: 'TIEMPO',
          },
        },
      },
      pl: {
        translation: {
          header: {
            docs_link: 'Dokumentacja API',
          },
          jobs: {
            search: 'Wyszukiwanie',
            latest_tab: 'OSTATNI WYKONANIE',
            history_tab: 'HISTORIA WYKONAŃ',
            location: 'LOKALIZACJA',
            empty_title: 'Brak dostępnych informacji o wykonaniu',
            empty_body: 'Spróbuj dodać kilka przebiegów dla tego zadania.',
            runinfo_subhead: 'ASPECTY',
            runs_subhead: 'ASPECTY',
            facets_subhead_aria: 'Wyszukiwanie',
            dialog_delete: 'USUNĄĆ',
            dialog_confirmation_title: 'Jesteś pewny?',
          },
          search: {
            filter: {
              all: 'Wszystko',
              jobs: 'Zadania',
              datasets: 'Zbiory Danych',
              updated: 'Zaktualizowano',
              name: 'Nazwa',
            },
            status: 'Badawczy...',
            none: 'Brak Wyników',
            search: 'Wyszukiwanie',
            search_aria: 'Wyszukiwanie zadań i zbiorów danych',
            jobs: 'Zadania',
            and: 'i',
            datasets: 'Zbiory Danych',
          },
          lineage: {
            empty_title: 'Nie wybrano węzła',
            empty_body:
              'Spróbuj wybrać węzeł za pomocą wyszukiwania lub strony zadań lub zestawów danych.',
          },
          sidenav: {
            jobs: 'ZADANIA',
            datasets: 'ZBIORY DANYCH',
            events: 'WYDARZENIA',
          },
          namespace_select: {
            prompt: 'pn',
          },
          dataset_tags: {
            tooltip: 'Dodać etykietę',
            dialogtitle: 'Dodaj tagi',
            selecttagtoadd: 'Wybierz opcję Tag, który chcesz dodać',
            addatagdialog: 'Dodaj znacznik',
            canceltagdialog: 'anulować',
          },
          dataset_info: {
            empty_title: 'Nie znaleziono zbiorów danych',
            empty_body: 'Spróbuj dodać pola zbiory danych.',
            facets_subhead: 'ASPECTY',
            facets_subhead_aria: 'Wyszukiwanie',
            run_subhead: 'Stworzony przez Run',
            duration: 'Czas trwania',
          },
          datasets: {
            latest_tab: 'NAJNOWSZY SCHEMAT',
            history_tab: 'HISTORIA WERSJI',
            column_lineage_tab: 'RODOWÓD KOLUMNOWY',
            dialog_delete: 'USUNĄĆ',
            dialog_confirmation_title: 'Jesteś pewny?',
          },
          datasets_route: {
            empty_title: 'Nie znaleziono zbiorów danych',
            empty_body:
              'Spróbuj zmienić przestrzenie nazw lub zapoznaj się z naszą dokumentacją, aby dodać zbiory danych.',
            heading: 'ZBIORY DANYCH',
            name_col: 'NAZWA',
            namespace_col: 'PRZESTRZEŃ NAZW',
            source_col: 'ŹRÓDŁO',
            updated_col: 'ZAKTUALIZOWANO',
            status_col: 'STATUS',
          },
          datasets_column_lineage: {
            empty_title: 'Brak rodowodu kolumny',
            empty_body: 'Pochodzenie kolumny jest niedostępne dla określonego zbioru danych.',
          },
          jobs_route: {
            empty_title: 'Nie znaleziono ofert pracy',
            empty_body:
              'Spróbuj zmienić przestrzenie nazw lub zapoznaj się z naszą dokumentacją, aby dodać zadania.',
            heading: 'ZADANIA',
            name_col: 'NAZWA',
            namespace_col: 'PRZESTRZEŃ NAZW',
            updated_col: 'ZAKTUALIZOWANO',
            latest_run_col: 'NAJNOWSZY CZAS TRWANIA',
            latest_run_state_col: 'NAJNOWSZY STAN URUCHOMIENIA',
          },
          runs_columns: {
            id: 'ID',
            state: 'PAŃSTWO',
            created_at: 'UTWORZONY W',
            started_at: 'ROZPOCZĘŁO SIĘ O GODZ',
            ended_at: 'ZAKOŃCZONE O GODZ',
            duration: 'TRWANIE',
          },
          dataset_info_columns: {
            name: 'NAZWA',
            type: 'RODZAJ',
            description: 'OPIS',
          },
          dataset_versions_columns: {
            version: 'WERSJA',
            created_at: 'UTWORZONY W',
            fields: 'KIERUNKI',
            created_by_run: 'STWORZONY PRZEZ URUCHOM',
            lifecycle_state: 'STAN CYKLU ŻYCIA',
          },
          events_route: {
            title: 'WYDARZENIA',
            from_date: 'Od daty',
            to_date: 'Spotykać się z kimś',
            previous_page: 'Poprzednia strona',
            next_page: 'Następna strona',
            empty_title: 'Nie znaleziono wydarzeń',
            empty_body:
              'Spróbuj zmienić daty lub zapoznaj się z naszą dokumentacją, aby dodać wydarzenia.',
          },
          events_columns: {
            id: 'ID',
            state: 'PAŃSTWO',
            name: 'NAZWA',
            namespace: 'PRZESTRZEŃ NAZW',
            time: 'CZAS',
          },
        },
      },
      zh: {
        translation: {
          header: {
            docs_link: 'API 文档',
          },
          jobs: {
            search: '搜索',
            latest_tab: '最新运行',
            history_tab: '运行历史',
            location: '位置',
            empty_title: '没有可用的运行信息',
            empty_body: '尝试添加一些运行信息。',
            runinfo_subhead: '方面',
            runs_subhead: '方面',
            facets_subhead_aria: '搜索',
            dialog_delete: '删除',
            dialog_confirmation_title: '你确定吗？',
          },
          search: {
            filter: {
              all: '全部',
              jobs: '工作',
              datasets: '数据集',
              updated: '更新',
              name: '名称',
            },
            status: '搜索...',
            none: '没有结果',
            search: '搜索',
            search_aria: '搜索工作和工作集',
            jobs: '工作',
            and: '和',
            datasets: '数据集',
          },
          lineage: {
            empty_title: '未选择节点',
            empty_body: '尝试通过搜索或工作或数据集页面选择一个节点。',
            graph_depth_title: '深度',
            full_graph_label: '完整',
            empty: '空',
            no_inputs: '此节点没有输入。',
            no_outputs: '此节点没有输出。',
          },
          sidenav: {
            dataOps: '数据操作',
            jobs: '工作',
            datasets: '数据集',
            events: '事件',
          },
          namespace_select: {
            prompt: 'ns', // namespace的缩写
          },
          dataset_tags: {
            tooltip: '添加标签',
            dialogtitle: '添加标签',
            selecttagtoadd: '选择要添加的标签',
            addatagdialog: '添加标签',
            canceltagdialog: '取消',
          },
          dataset_info: {
            empty_title: '没有字段',
            empty_body: '尝试添加数据集字段。',
            facets_subhead: '方面',
            facets_subhead_aria: '搜索',
            run_subhead: '由运行创建',
            duration: '持续时间',
          },
          datasets: {
            latest_tab: '最新模式',
            history_tab: '版本历史',
            column_lineage_tab: '列血缘',
            dialog_delete: '删除',
            dialog_confirmation_title: '你确定吗？',
            show_field_tags: '显示字段标签',
          },
          datasets_route: {
            empty_title: '没有数据集',
            empty_body: '尝试更改命名空间或查看我们的文档以添加数据集。',
            heading: '数据集',
            name_col: '名称',
            namespace_col: '命名空间',
            source_col: '来源',
            updated_col: '更新时间',
            quality: '质量',
          },
          datasets_column_lineage: {
            empty_title: '没有列血缘',
            empty_body: '列血缘不可用于指定数据集。',
          },
          jobs_route: {
            empty_title: '没有工作',
            empty_body: '尝试更改命名空间或查看我们的文档以添加工作。',
            heading: '工作',
            name_col: '名称',
            namespace_col: '命名空间',
            updated_col: '更新时间',
            latest_run_col: '最新运行时间',
            latest_run_state_col: '最新运行状态',
          },
          runs_columns: {
            id: 'ID',
            state: '状态',
            created_at: '创建时间',
            started_at: '开始时间',
            ended_at: '结束时间',
            duration: '持续时间',
          },
          dataset_info_columns: {
            name: '名称',
            type: '类型',
            description: '描述',
            column_lineage: '列血缘',
          },
          dataset_versions_columns: {
            version: '版本',
            created_at: '创建时间',
            fields: '字段',
            created_by_run: '由运行创建',
            lifecycle_state: '生命周期状态',
          },
          events_route: {
            title: '事件',
            from_date: '开始日期',
            to_date: '结束日期',
            previous_page: '上一页',
            next_page: '下一页',
            empty_title: '没有事件',
            empty_body: '尝试更改日期或查看我们的文档以添加事件。',
          },
        },
      },
    },
    defaultNS,
    detection: DETECTION_OPTIONS,
  })
